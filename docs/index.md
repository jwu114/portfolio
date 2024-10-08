---
title: Jiarui Wu
---

```tsx
/**
 *  inline: true
 */

import React from 'react';
import ScrollDownButton from '../src/ScrollDownButton/index';
import DarkableImage from '../src/DarkableImage/index';
import AnchorButton from '../src/AnchorButton/index';

export default () =>
<div style={{textAlign: 'center'}}>
  <div style={{marginTop: '70px', marginBottom: '70px', textAlign: 'center'}}>
    <img src='/portfolio/avatar.png' alt='avatar' width='300px'/>
    <h1> Jiarui Wu </h1>
    <p> CS Student and Teaching Assistant @ University of Rochester</p>
    <ScrollDownButton id='about_me'/>
    <h1 style={{fontSize:'32px', marginTop:'150px'}} id='about_me'> About Me </h1>
  </div>
  <div style={{marginLeft: '15%', marginRight: '15%', lineHeight: '2'}}> 
    <p style={{textAlign: 'left'}}> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Hi! I'm Jiarui Wu, and you can call me Jerry. I'm a senior majoring in Computer Science at the University of Rochester. I have taken charge of Computer Science Teaching Assistant in my college for two years. I love programming and AI, and I plan to be a full-stack software engineer or AI engineer in the future. I like listening to music, watching movies, reading books, and playing video games in my spare time. I also have habits of making to-do lists and exercising in gyms. </p>
    <ScrollDownButton id='education'/>
  </div>
  <div style={{overflow: 'hidden', marginTop:'150px', marginLeft:'7%', marginRight:'7%'}}> 
    <h1 style={{fontSize:'32px', textAlign:'center'}} id='education'> Education </h1>
    <ul style={{marginLeft:'40px', padding: '0px', listStyle: 'none', float: 'left'}}> 
      <li>
        <img src='/portfolio/bnds_top.png' alt='high school logo' width='200px'/>
      </li>
      <li>
        <DarkableImage src='/portfolio/bnds_bottom.png' alt='high school logo' width='200px'/>
      </li>
    </ul>
    <p style={{textAlign: 'left', float: 'left', marginLeft:'40px', marginTop: '4%',  width:'75%', lineHeight: '2'}}> In 2021, I graduated from Beijing National Day School. It was the place where I began to learn computer science and programming. I took Mathematics, Physics, English, Chinese, Business, and Computer Science courses and completed the International Baccalaureate Diploma Programme (IBDP) here in three years. </p>
  </div>
  <div style={{overflow: 'hidden', marginTop: '50px', marginLeft:'7%', marginRight:'7%', marginBottom: '60px'}}> 
    <img style={{marginLeft:'40px', float: 'left'}} src='/portfolio/uofr_logo.png' alt='college logo' width='200px'/>
    <p style={{textAlign: 'left', float: 'left', marginLeft:'40px', marginTop: '4%', width:'75%', lineHeight: '2'}}> I am the class of 2024 at the University of Rochester. As you know, I major in Computer Science and minor in Business here. I took positions in various technology organizations and worked as a Teaching Assistant. I love to learn from different experiences. </p>
  </div>
</div>
```
