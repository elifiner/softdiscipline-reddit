const { Client } = require("@notionhq/client")

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function getPage(pageId) {
  let blocks = await client.blocks.children.list({
    parent_id: pageId,
    page_size: 1000
  });
  blocks = blocks.results;

  let numbered_list_count = 1;
  let parts = [];
  for (b of blocks) {
    // combine all text parts for block
    if (! b[b.type].text) continue;
    let text = b[b.type].text.map((t) => t.plain_text).join('');
    // handle numbered lists
    if (b.numbered_list_item) {
      text = `${numbered_list_count++}. ` + text;
    } else {
      numbered_list_count = 1;
    }
    // handle bulleted lists
    if (b.bulleted_list_item) {
      text = '- ' + text;
    }
    parts.push(text);
    if (b.has_children) {
      parts.push('  ' + (await this.getNotionPageContent(b.id)).replace(/\n/g, '\n  '));
    }
  }
  return parts.join('\n');
};
  
function parseValue(value) {
  if (Array.isArray(value)) {
    value = value.map(parseValue);
    if (value.length <= 1) {
      value = value[0] || null;
    }
    return value;
  } else if (value && value.plain_text) {
    return value.plain_text.trim();
  } else if (value && value.name) {
    return value.name;
  } else {
    return value;
  }
}

async function simpleQuery({database_id, filter}) {
  var rows = await client.databases.query({
    database_id,
    filter,
    page_size: 1000
  });
  var results = [];
  for (row of rows.results) {
    properties = {};
    for (const [k, v] of Object.entries(row.properties)) {
      let value = v[v.type];
      properties[k] = parseValue(value);
    }
    properties.id = row.id;
    results.push(properties);
  }
  return results;        
}

async function getOptions({database_id, field}) {
  const db = await client.databases.retrieve({
    database_id,
  });

  return db.properties[field].select.options.map(parseValue);
}

module.exports = {
  client,
  simpleQuery,
  getOptions,
  getPage,
}
