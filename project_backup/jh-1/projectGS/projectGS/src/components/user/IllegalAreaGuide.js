import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import "../../css/user/sub.scss";

// 이미지 url
import hydrant1 from "../../images/guide1-1.jpg";
import hydrant2 from "../../images/guide1-2.jpg";
import cross1 from "../../images/guide2-1.jpg";
import cross2 from "../../images/guide2-2.jpg";



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const IllegalAreaGuide = () => {
  let guide1 = {backgroundImage: `url(${hydrant1})`};
  let guide2 = {backgroundImage: `url(${hydrant2})`};
  let guide3 = {backgroundImage: `url(${cross1})`};
  let guide4 = {backgroundImage: `url(${cross2})`};

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="Guide" className="subPage">
      <div className="section">
        <div className="sub-title"><h2>불법주정차 금지 구역</h2></div>

        <div className="tabMenu">
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="소화전" {...a11yProps(0)} />
              <Tab label="교차로 모퉁이" {...a11yProps(1)} />
              <Tab label="버스 정류소" {...a11yProps(2)} />
              <Tab label="횡단보도" {...a11yProps(3)} />
              <Tab label="어린이 보호구역" {...a11yProps(4)} />
              <Tab label="장애인 전용구역" {...a11yProps(5)} />
              <Tab label="소방차 전용구역" {...a11yProps(6)} />
              <Tab label="친환경차 충전구역" {...a11yProps(7)} />
              <Tab label="기타" {...a11yProps(8)} />
            </Tabs>
          </Box>
        </div>

        <div className="tabContents">
          {/* 소화전 */}
          <TabPanel value={value} index={0}>
            <div className="guideBox">
              <div className="col-6 col-sm-12">
                <div className="guideImg">
                  <Swiper 
                    pagination={{clickable: true}} 
                    loof={true} 
                    modules={[Autoplay, EffectFade, Pagination]} 
                    effect={"fade"}
                    autoplay={{delay: 4000}}
                    speed={1400}
                  >
                    <SwiperSlide>
                      <div style={guide1} className="slideImg"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={guide2} className="slideImg"></div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="guideTxt">
                  <div className="gtTop">
                    <h3>소화전 불법 주정차</h3>
                    <p>주정차 금지 교통안전표지가 설치된 5M 이내 정지 상태 차량</p>
                  </div>

                  <ul className="checkTxt">
                    <li><strong>교통안전표지</strong><br></br> - 주정차 금지 규제 표시 또는 노면 표시 (황색 실선 또는 복선)</li>
                    <li>경계석 또는 도로바닥에 적색으로 표시된 경우는 소화전이 보이지 않아도 신고 가능</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* 교차로 모퉁이 */}
          <TabPanel value={value} index={1}>
            <div className="guideBox">
              <div className="col-6 col-sm-12">
                <div className="guideImg">
                  <Swiper 
                    pagination={{clickable: true}} 
                    loof={true} 
                    modules={[Autoplay, EffectFade, Pagination]} 
                    effect={"fade"}
                    autoplay={{delay: 4000}}
                    speed={1400}
                  >
                    <SwiperSlide>
                      <div style={guide3} className="slideImg"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={guide4} className="slideImg"></div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-6 col-sm-12">
                <div className="guideTxt">
                  <div className="gtTop">
                    <h3>교차로 모퉁이</h3>
                    <p>주정차 금지 규제표시 또는 노면표시가 설치된 교차로의 가장자리나 도로의 모퉁이 5M 이내 정지 상태 차량</p>
                  </div>

                  <ul className="checkTxt">
                    <li><strong>교통안전표지</strong><br></br> - 주정차 금지 규제 표시 또는 노면 표시 (황색 실선 또는 복선)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            tab3
          </TabPanel>
          <TabPanel value={value} index={3}>
            tab4
          </TabPanel>
          <TabPanel value={value} index={4}>
            tab5
          </TabPanel>
          <TabPanel value={value} index={5}>
            tab6
          </TabPanel>
          <TabPanel value={value} index={6}>
            tab7
          </TabPanel>
          <TabPanel value={value} index={7}>
            tab8
          </TabPanel>
          <TabPanel value={value} index={8}>
            tab9
          </TabPanel>
        </div>
      </div>
    </div>
  );
};
export default IllegalAreaGuide;
