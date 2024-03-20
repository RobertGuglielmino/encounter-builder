import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({region: 'us-west-2'});
const docClient = DynamoDBDocumentClient.from(client);

export async function getPreviousEncountersDB(uuid) {
    const command = new GetCommand({
        TableName: "encounter-generator-db",
        Key: {
            id: uuid,
        },
    });
    
    console.log("yes");

    try {
        const response = await docClient.send(command);
        console.log("2");
        console.log(response);
        return response;
    } catch (e) {
        console.log("3");
        console.log(e);
    }
}

export async function pushEncountersToDB(uuid, encounters) {
    const command = new PutCommand({
        TableName: "encounter-generator-db",
        Item: {
            id: uuid,
            encounterList: encounters,
            writeTime: new Date().toJSON(),
        },
    });

    try {
        const response = await docClient.send(command);
        console.log(response);
        return response;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteFromDB(uuid) {
    const command = new DeleteCommand({
        TableName: "encounter-generator-db",
        Key: {
            id: uuid,
        },
    });
    
    try {
        const response = await docClient.send(command);
        console.log(response);
        return response;
    } catch (e) {
        console.log(e);
    }
}