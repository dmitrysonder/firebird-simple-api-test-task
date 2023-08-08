import { FireBirdApi } from "./FirebirdAPI";

const fantomAPI = new FireBirdApi(250);
const arbitrumAPI = new FireBirdApi(42161);

fantomAPI.getFirebirdQuote({
    from: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    to: "0xf24bcf4d1e507740041c9cfd2dddb29585adce1e",
    receiver: "0x3FD5e7C6A2950691ffbf9358d0C093de30f54432",
    amount: "10000000",
  }).then(data => console.log(data))