import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document({
    name: "landing-page",
    label: "This is your homepage",
    description: "Edit the content of the home page",
    store: "src:index.yml",
    fields: [
      "title: text",
      "subtitle: text",
      "content: markdown",
    ],
});

export default cms;
