cloudant_url="https://8e88b86c-0e95-48bc-b100-e402df3c3e50-bluemix.cloudantnosqldb.appdomain.cloud"
cloudant_apikey="nB2H_-vI_0TEZBJN0g0eVfzyHCl2mRwrE9wMSfCnf4PU"

const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

const authenticator = new IamAuthenticator({
    apikey: "nB2H_-vI_0TEZBJN0g0eVfzyHCl2mRwrE9wMSfCnf4PU",
});

const cloudant = CloudantV1.newInstance({
    authenticator: authenticator,
    serviceName: 'Cloudant-26'
});

cloudant.setServiceUrl(cloudant_url);

const dbname = 'listingsdb';

async function getListings() {
    const listings = await cloudant.postAllDocs({
        db: dbname,
        includeDocs: true,
      })
      .then(allDocuments => {
        console.log(allDocuments.result.rows[0].doc.listings);
        let fetchedListings = allDocuments.result.rows[0].doc;
        let {listings} = fetchedListings;
        console.log("This is inside getListings: ",listings);
        return listings;
        });
    return listings;
};

exports.getListings = getListings;

/*getListings()
.then(listings => {console.log("This is after getListings",listings)});*/