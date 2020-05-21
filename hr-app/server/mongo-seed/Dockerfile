FROM mongo
COPY init.json /init.json
CMD mongoimport --host mongo --db employee --collection users --mode upsert --upsertFields email,password,role,accountType --type json --file /init.json --jsonArray