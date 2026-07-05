import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "v0tu0k34",
  dataset: "production",
  apiVersion: "2026-07-02",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source);
}