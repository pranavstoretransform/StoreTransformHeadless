
const https = require('https');

function fetchHomePage() {
  const url = 'https://storetransform.com/wp-json/wp/v2/pages/7410?_embed';
  console.log('Fetching URL:', url);
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log('Home Page Data fetched.');
        
        if (jsonData.acf) {
          const acf = jsonData.acf;
          console.log('ACF Keys:', Object.keys(acf));
          
          // Check Hire Developers root fields
          console.log('\nHire Developers Root Fields:');
          console.log('hire_developers_heading_new:', acf.hire_developers_heading_new);
          console.log('hire_developers_sub_text_new:', acf.hire_developers_sub_text_new);

          // Check Services Detailed root fields
          console.log('\nServices Detailed Root Fields:');
          console.log('service_we_provide_heading_new:', acf.service_we_provide_heading_new);
          console.log('service_we_provide_sub_heading_new:', acf.service_we_provide_sub_heading_new);

          // Check Services Detailed repeater
          if (acf.service_we_provide_repeater_new) {
            console.log('\nServices Detailed Repeater (first item):');
            console.log(JSON.stringify(acf.service_we_provide_repeater_new[0], null, 2));
          } else {
            console.log('\nServices Detailed repeater not found or empty.');
          }

          // Check Services Image Section
          console.log('\nServices Image Section:');
          console.log('services_image_section:', acf.services_image_section);

          // Check Hire Developers repeater
          if (acf.hire_developers_box_icon_technology_new) {
            console.log('\nHire Developers Repeater (first item):');
            console.log(JSON.stringify(acf.hire_developers_box_icon_technology_new[0], null, 2));
          } else {
            console.log('\nHire Developers repeater not found or empty.');
          }
          
          // Check Stats Section root fields
          console.log('\nStats Section Root Fields:');
          console.log('right_side_repeaer (repeater):', acf.right_side_repeaer ? 'Found' : 'Not Found');
          console.log('title_join:', acf.title_join);
          console.log('sub_content_join:', acf.sub_content_join);

          // Check Stats Section repeater
          if (acf.right_side_repeaer) {
            console.log('\nStats Section Repeater (first item):');
            console.log(JSON.stringify(acf.right_side_repeaer[0], null, 2));
          } else {
            console.log('\nStats Section repeater not found or empty.');
          }
          
          // Check AI Section root fields
          console.log('\nAI Section Root Fields:');
          console.log('ai_models_title:', acf.ai_models_title);
          console.log('ai_models_description:', acf.ai_models_description);

          // Check AI Section repeater
          if (acf.ai_models) {
            console.log('\nAI Section Repeater (first item):');
            console.log(JSON.stringify(acf.ai_models[0], null, 2));
          } else {
            console.log('\nAI Section repeater not found or empty.');
          }

          // Check Services Grid root fields
          console.log('\nServices Grid Root Fields:');
          console.log('custom_web_design__our_process_heading:', acf.custom_web_design__our_process_heading); // Check with double underscore
          console.log('custom_web_design_our_process_heading:', acf.custom_web_design_our_process_heading);   // Check with single underscore
          console.log('custom_contents:', acf.custom_contents);

          // Check Testimonials repeater
          if (acf.review_repeater) {
            console.log('\nTestimonials Repeater (first item):');
            console.log(JSON.stringify(acf.review_repeater[0], null, 2));
          } else {
            console.log('\nTestimonials repeater not found or empty.');
          }

        } else {
          console.log('No ACF data found.');
        }
      } catch (e) {
        console.error('Error parsing JSON:', e);
      }
    });
  }).on('error', (e) => {
    console.error('Error fetching data:', e);
  });
}

fetchHomePage();
