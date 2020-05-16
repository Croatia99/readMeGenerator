function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  
  ## Table of Contents
      * ${data.projectDescript}
      * ${data.usage}
      * ${data.license}
      * ${data.test}
  
  ## Description
      * ${data.tableofContents}
  
  ## Installation
      * ${data.instalation}

  ## Contributors
      * ${data.contributors}

  ## GitHub Name
      * ${data.githubname}
`;
}

module.exports = generateMarkdown;
