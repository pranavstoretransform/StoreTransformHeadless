export const API_URL = 'https://storetransform.com/wp-json/wp/v2';

export async function fetchAPI(path: string) {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    console.error(`Failed to fetch API: ${path}`);
    throw new Error('Failed to fetch API');
  }
  
  return res.json();
}

export async function getLatestPosts() {
  const posts = await fetchAPI('/posts?_embed&per_page=3');
  return posts;
}

export async function getAllPosts() {
  const posts = await fetchAPI('/posts?_embed&per_page=100');
  return posts;
}

export async function getAllPages() {
  const pages = await fetchAPI('/pages?per_page=100');
  return pages;
}

export async function enrichPageData(page: any) {
  if (!page || !page.acf) return page;

  // Extract all image IDs from ACF fields
  const imageIds: number[] = [];
  const acf = page.acf;
  
  // Single image fields
  const singleImageFields = [
    'background_image_section_1',
    'sider_image',
    'contact_image',
    'review_background_image',
    'right_side_image_new',
    'right_image',
    'services_image_section',
    'banner_image',
    'background_image',
    'our_mission_image_'
  ];

  singleImageFields.forEach(field => {
    if (acf[field]) imageIds.push(acf[field]);
  });

  // Repeater images
  acf.how_we_work_repeater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });
  
  acf.peaks_we_offer_repeater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });
  
  acf.ever_evolving_reater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });
  
  acf.review_repeater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });
  
  acf.review_content_box?.forEach((item: any) => {
    if (item.review_rating_icon) imageIds.push(item.review_rating_icon);
    if (item.review_icon_company) imageIds.push(item.review_icon_company);
  });
  
  acf.hire_developers_box_icon_technology_new?.forEach((item: any) => {
    if (item.hire_developers_icon_image_new) imageIds.push(item.hire_developers_icon_image_new);
  });
  
  acf.service_we_provide_repeater_new?.forEach((item: any) => {
    if (item.image_service_new) imageIds.push(item.image_service_new);
  });

  acf.custom_web_design_our_process_box?.forEach((item: any) => {
    if (item.custom_web_design_our_process_box_icon) imageIds.push(item.custom_web_design_our_process_box_icon);
  });
  
  acf.why_choose_us_repeater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });
  
  acf.ai_models?.forEach((item: any) => {
    if (item.logo) imageIds.push(item.logo);
  });

  // About Us specific repeaters
  acf.repeater_sec_4?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });

  acf.our_mission_repeater?.forEach((item: any) => {
    if (item.image) imageIds.push(item.image);
  });

  // Fetch media details
  if (imageIds.length > 0) {
    // Remove duplicates and empty values
    const uniqueIds = [...new Set(imageIds)].filter(id => id);
    
    // Fetch in chunks of 100 (max per_page)
    const mediaPromises = [];
    for (let i = 0; i < uniqueIds.length; i += 100) {
      const chunk = uniqueIds.slice(i, i + 100);
      mediaPromises.push(fetchAPI(`/media?include=${chunk.join(',')}&per_page=100`));
    }
    
    const mediaChunks = await Promise.all(mediaPromises);
    const mediaList = mediaChunks.flat();
    
    // Create a map of ID -> URL
    const mediaMap: Record<number, string> = {};
    mediaList.forEach((media: any) => {
      mediaMap[media.id] = media.source_url;
    });
    
    // Replace IDs with URLs in ACF data
    const replaceImage = (id: number) => mediaMap[id] || '';
    
    singleImageFields.forEach(field => {
      if (acf[field]) acf[field] = replaceImage(acf[field]);
    });
    
    acf.how_we_work_repeater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
    
    acf.peaks_we_offer_repeater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
    
    acf.ever_evolving_reater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
    
    acf.review_repeater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
    
    acf.review_content_box?.forEach((item: any) => {
      if (item.review_rating_icon) item.review_rating_icon = replaceImage(item.review_rating_icon);
      if (item.review_icon_company) item.review_icon_company = replaceImage(item.review_icon_company);
    });
    
    acf.hire_developers_box_icon_technology_new?.forEach((item: any) => {
      if (item.hire_developers_icon_image_new) item.hire_developers_icon_image_new = replaceImage(item.hire_developers_icon_image_new);
    });
    
    acf.service_we_provide_repeater_new?.forEach((item: any) => {
      if (item.image_service_new) item.image_service_new = replaceImage(item.image_service_new);
    });

    acf.custom_web_design_our_process_box?.forEach((item: any) => {
      if (item.custom_web_design_our_process_box_icon) item.custom_web_design_our_process_box_icon = replaceImage(item.custom_web_design_our_process_box_icon);
    });
    
    acf.why_choose_us_repeater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
    
    acf.ai_models?.forEach((item: any) => {
      if (item.logo) item.logo = replaceImage(item.logo);
    });

    // About Us specific repeaters replacement
    acf.repeater_sec_4?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });

    acf.our_mission_repeater?.forEach((item: any) => {
      if (item.image) item.image = replaceImage(item.image);
    });
  }
  
  return page;
}

export async function getPageBySlug(slug: string) {
  const pages = await fetchAPI(`/pages?slug=${slug}&_embed`);
  if (pages && pages.length > 0) {
    return enrichPageData(pages[0]);
  }
  return null;
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchAPI(`/posts?slug=${slug}&_embed`);
  if (posts && posts.length > 0) {
    return posts[0];
  }
  return null;
}

export async function getHomePageData() {
  const page = await fetchAPI('/pages/7410');
  return enrichPageData(page);
}
