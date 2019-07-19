# URLBuilder
URLBuilder class for easier composition of [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) objects in TypeScript/JavaScript

Inspired by JAX-RS [UriBuilder](https://docs.oracle.com/javaee/7/api/javax/ws/rs/core/UriBuilder.html).
This implementation does not support variable templates such as `{var}` as of yet.

## Example

    URLBuilder.fromURL("https://atomgraph.com").path("cases").path("nxp-semiconductors").build().toString();

Will return:

    https://atomgraph.com/cases/nxp-semiconductors