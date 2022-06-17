const mapping = {
    a: 'href',
    img: 'src',
    link: 'href',
  };
  
  export default (tags) => {
    const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
    const paths = filteredTags.map((tag) => tag[mapping[tag.name]]);
  
    return paths;
  };