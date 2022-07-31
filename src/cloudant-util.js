const {CLOUDANT_API_KEY, CLOUDANT_URL} = require("./config.json");

const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

const authenticator = new IamAuthenticator({
    apikey: CLOUDANT_API_KEY,
});

const cloudant = CloudantV1.newInstance({
    authenticator: authenticator,
    serviceName: 'Cloudant-26'
});

cloudant.setServiceUrl(CLOUDANT_URL);

const dbname = 'listingsdb';

async function getListings() {
    const listings = await cloudant.postAllDocs({
        db: dbname,
        includeDocs: true,
      })
      .then(allDocuments => {
        let fetchedListings = allDocuments.result.rows[0].doc;
        let {listings} = fetchedListings;
        return listings;
        });
    return listings;
};

exports.getListings = getListings;