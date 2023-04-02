# Tech Radar Editor

Simple web interface to generate Tech radar (inspired from https://www.thoughtworks.com/radar)

The Tech Radar Editor is a visual tool. You can use it to map your technology landscape. The map takes the form
of a radar on which each blip represents a technology element of your team or organization.

For each blip you can place it according to 2 criteria: category and adoption level. The categories are
`Languages & framework`, `Tools`, `Platforms & Data` and `Techniques`. The adoption levels are `Adopt`,
`Trial`, `Assess` and `Hold`.

Meaning of the categories are :

- **Tools** Things we use to build our products, like git or IDE.
- **Platforms & data** Things that we build software on top of such as mobile technologies like Android, virtual
  platforms like the JVM. Also
  databases used to manage data used in our products.
- **Programming Languages and Frameworks** Really need a comment ?
- **Techniques** These include elements of a software development process, such as experience design; and ways of
  structuring software,
  such as microservices.

Meaning of the adoption levels are :

- **Adopt** The Adopt ring represents blips on which we have a good control. We use them as needed in our projects.
- **Trial** The Trial ring represents blips that we sometimes use, but that we need to train on in order to master them.
- **Assess** The Assess ring represents blips that we would like to integrate to our stack. But first we need to train
  and understand the impact on our ecosystem.
- **Hold** The Hold ring represents blips that we have identified but for which no integration action is envisaged.</p>

# Getting started

Just `yarn install` and then `yarn dev` to run the app.

For building and preview the build use

```
yarn build
yarn preview
```