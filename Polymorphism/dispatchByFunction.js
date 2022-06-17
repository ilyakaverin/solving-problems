export default (tag) => {
    let opened = `<${tag.name}`;
 
    const excludedAttributes =  {
    name: null,
    tagType: null,
    body: null
    }

  for(const prop of Object.keys(tag)) {
    if(!Object.hasOwn(excludedAttributes, prop)) {
      opened = `${opened} ${prop}="${tag[prop]}"`;
    }
  }
   const tagTypeMap = {
    single: () => `${opened}>`,
    pair: () =>  `${opened}>${tag.body}</${tag.name}>`,
  }

  return tagTypeMap[tag.tagType]()
}