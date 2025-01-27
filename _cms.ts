import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS(
    {
        site: {
            name: "My blog CMS",
            description: "Here I can edit the content of my blog",
            url: "https://myblog.com",
            body: `
            <p>Long text, for instructions or other content that you want to make it visible in the homepage</p>
            `,
          },
          auth: {
            method: "basic",
            users: {
              user1: "password1",
              user2: "password2",
            },
          },
    }
);

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
