import { authorType } from "./author";
import { pageSeoType } from "./pageSeo";
import { postType } from "./post";
import { reviewType } from "./review";
import { seoType } from "./seo";
import { serviceCategoryType, serviceType } from "./service";
import { siteSeoType } from "./siteSeo";

export const schemaTypes = [postType, authorType, reviewType, serviceCategoryType, serviceType, seoType, pageSeoType, siteSeoType];
