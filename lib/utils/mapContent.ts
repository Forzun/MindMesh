import { JSX } from "react";

interface dataProps { 
    navMain: ({
        title: string;
        url: string;
        icon?: JSX.Element;
        isActive?: boolean;
        items: {
            title: string;
            url: string;
        }[];
    })[];
}

interface contenteProps { 
    id: string | number;
    title: string; 
    link: string; 
    tag: string[];
    userId: string | number;
}

export default function MapContent({content , data} : {content: contenteProps[], data: dataProps}){

    content.forEach((item) => {
        item.tag?.forEach((tag) => {
          data.navMain.forEach((navItem) => {
            if (navItem.title.toLowerCase() === tag.toLowerCase()) {dd
              const exists = navItem.items.some(
                (existingItem) => existingItem.title === item.title
              );

              if (!exists) {
                navItem.items.push({
                  title: item.title,
                  url: "#",
                });
              }
            }
          });
        });
      })

      console.log("data went through inside...")
    
      return data;
}


