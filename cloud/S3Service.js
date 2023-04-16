import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { parse } from "csv";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: __dirname + "/../.env"
});

const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
console.log(AWS_DEFAULT_REGION);
export default class S3Service {
  s3Client = new S3Client({ region: AWS_DEFAULT_REGION });

  constructor() {
    this.s3Client.config.accessKeyId = AWS_ACCESS_KEY_ID;
    this.s3Client.config.secretAccessKey = AWS_SECRET_ACCESS_KEY;
  }

  getData = async (bucket, key) => {
    const result = await this.s3Client.send(
      new GetObjectCommand({ Bucket: bucket, Key: key })
    );

    const bufferResult = await result.Body.transformToByteArray();
    const decodeResult = new TextDecoder().decode(bufferResult);

    const rows = decodeResult.toString("utf-8").split("\n");
    const items = rows.map((row) => row.split(","));
    return items.filter((item, i) => i < 50);
  };
}
