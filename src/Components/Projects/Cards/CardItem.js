import React from 'react';
import { Card } from 'antd';

const CardItem = ({image, title, subTitle, rating, structure, projectedReturn}) => {
  return (
    <div className="card-item-wrapper">
      <Card
        hoverable
        bordered={false}
        style={{ width: '100%' }}
        cover={<img alt="example" src={`${image}`} />}
      >
        <div className="card-item-content">
          <div className="card-item-title">
            {title}
          </div>
          <div className="card-item-sub-title">
            {subTitle}
          </div>
          <div className="card-item-bottom-bar">
            <div className="card-item-rating-wrapper">
              <div className="card-item-rating-title">
                Rating
              </div>
              <div className="card-item-rating">
                <span>{rating}</span>
              </div>
            </div>
            <div className="card-item-structure-wrapper">
              <div className="card-item-structure-title">
                Structure
              </div>
              <div className="card-item-structure bold-font">
                {structure}
              </div>
            </div>
            <div className="projected-returr-wrapper">
              <div className="projected-returr-title">
                Projected Return
              </div>
              <div className="projected-returr bold-font">
                {projectedReturn}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardItem;