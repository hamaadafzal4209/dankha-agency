import { createClient } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({ projectId: projectId || "missing", dataset, apiVersion, useCdn: true });

const builder = createImageUrlBuilder({ projectId: projectId || "missing", dataset });

export function imageUrl(source: SanityImageSource, width: number): string {
  return builder.image(source).width(width).fit("max").auto("format").url();
}

/** Crops an image to the 1200 × 630 size social sites use for link previews */
export function shareImageUrl(source: SanityImageSource): string {
  return builder.image(source).width(1200).height(630).fit("crop").auto("format").url();
}
