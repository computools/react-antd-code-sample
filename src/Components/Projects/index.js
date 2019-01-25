import React from 'react';
import HeaderOfProjects from "./Header/Header";
import Cards from "./Cards";
import "./Projects.css";

const data = [
  {
    image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Los Angeles, CA - eFund',
    rating: 'B2',
    structure: 'Equity',
    projectedReturn: '5,3 - 10.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'New York',
    rating: 'B1',
    structure: 'Equity',
    projectedReturn: '11 - 23.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Atlanta - eFund',
    rating: 'B2',
    structure: 'Dept',
    projectedReturn: '5,3 - 10.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2015/11/07/11/19/house-1031011__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Los Angeles, CA - eFund',
    rating: 'B4',
    structure: 'Equity',
    projectedReturn: '10,7 - 20.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Los Angeles, CA - eFund',
    rating: 'B2',
    structure: 'Equity',
    projectedReturn: '3,5 - 80.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Los Angeles, CA - eFund',
    rating: 'B2',
    structure: 'Equity',
    projectedReturn: '5,3 - 10.8%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Philadelphia - eFund',
    rating: 'B1',
    structure: 'Equity',
    projectedReturn: '3 - 18%'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2015/11/07/11/19/house-1031011__340.jpg',
    title: 'Apartment renovation',
    subTitle: 'Los Angeles, CA - eFund',
    rating: 'B2',
    structure: 'Equity',
    projectedReturn: '1,9 - 40.8%'
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <HeaderOfProjects activePojectsCount={data.length} />
        <Cards data={data} />
      </div>
    </div>
  );
};

export default Projects;