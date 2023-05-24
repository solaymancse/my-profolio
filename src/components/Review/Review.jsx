import {
  MainDiv,
  Wrapper,
  H1,
  Icon,
  Left,
  Right,
  ImageDiv,
  ReviewDiv,
  DotContainer,
  Dots,
  Card,
} from "./ReviewElements";
import { reviewData } from "../../Data";
import { Container } from "react-bootstrap";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md";

import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Review = () => {
  return (
    <MainDiv>
      <Container>
        <H1>WHAT CLIENT'S SAY</H1>

        <Wrapper>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {reviewData.map((data, index) => (
              <SwiperSlide key={index}>
                <Card data-aos="fade-right">
                  <Left>
                    <ImageDiv>
                      <img src={data.img} alt={data.title} />
                    </ImageDiv>
                    <p>{data.title}</p>
                    <span>CEO</span>
                    <span>Sarah's Ltd</span>
                    <Icon>
                      <GrFacebookOption />
                      <GrInstagram />
                      <FaTwitter />
                      <GrLinkedinOption />
                    </Icon>
                  </Left>
                  <Right>
                    <ReviewDiv>
                      <Icon>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <MdStarHalf />
                      </Icon>
                      <p>Client Review</p>

                      <span>
                        <FaQuoteLeft />
                        {data.desc}
                      </span>
                    </ReviewDiv>
                  </Right>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </Container>
    </MainDiv>
  );
};
