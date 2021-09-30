import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "b7xqrihy",
    dataset: "production",
    useCdn: true
});
console.log("Connected")