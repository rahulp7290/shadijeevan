import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Wedding1 from "../assets/Wedding_1.jpg";
import Wedding2 from "../assets/Wedding_2.jpg";
import Wedding3 from "../assets/Wedding_3.jpg";
import Wedding4 from "../assets/Wedding_4.jpg";
import Wedding5 from "../assets/Wedding_5.jpg";
import Wedding6 from "../assets/Wedding_6.jpg";
import Wedding7 from "../assets/Wedding_7.jpg";
import Wedding8 from "../assets/Wedding_8.jpg";
import Wedding9 from "../assets/Wedding_9.jpg";



//Material Ui Component

export default function ImageGallery() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <ImageList 
        variant="masonry" 
        cols={3} 
        sx={{
          '@media (max-width:768px)': {
            columns: '1 !important',
          },
          '@media (max-width:1024px)': {
            columns: '2 !important',
          },
        }}
        gap={16}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                display: "block",
                transition: "transform 0.4s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  { img: Wedding1, title: "Wedding Moments", author: "Shaadi Jeevan" },
  { img: Wedding2, title: "Beautiful Couple", author: "Shaadi Jeevan" },
  { img: Wedding3, title: "Celebration", author: "Shaadi Jeevan" },
  { img: Wedding4, title: "Wedding Rituals", author: "Shaadi Jeevan" },
  { img: Wedding5, title: "Special Day", author: "Shaadi Jeevan" },
  { img: Wedding6, title: "Love Story", author: "Shaadi Jeevan" },
  { img: Wedding7, title: "Together Forever", author: "Shaadi Jeevan" },
  { img: Wedding8, title: "Happy Couple", author: "Shaadi Jeevan" },
  { img: Wedding9, title: "Happy Couple", author: "Shaadi Jeevan" },
];
