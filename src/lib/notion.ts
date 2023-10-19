import { Client } from "@notionhq/client";
import { SignUpFormData } from "./form";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID;

export const addRowToDatabase = async ({
  firstName,
  lastName,
  email,
  metadata,
}: SignUpFormData) => {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId!,
      },
      properties: {
        Email: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: email,
              },
            },
          ],
        },
        "First name": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: firstName,
              },
            },
          ],
        },
        "Last name": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: lastName,
              },
            },
          ],
        },
        "Created at": {
          date: {
            start: new Date().toISOString(),
          },
        },
        ...(metadata && {
          ...(metadata.country && {
            Country: {
              type: "rich_text",
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: metadata.country,
                  },
                },
              ],
            },
          }),
          ...(metadata.city && {
            City: {
              type: "rich_text",
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: metadata.city,
                  },
                },
              ],
            },
          }),
        }),
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
