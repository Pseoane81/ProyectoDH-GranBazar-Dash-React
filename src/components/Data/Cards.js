import React from 'react';
import GeneralContent from './GeneralContent';
import ExtraCards from './ExtraCards';

 
function Cards() {
  return (
    <React.Fragment>
      <div>
        <ul className="ultimos">
          <li>
            <GeneralContent />
          </li>
          <li>
            <ExtraCards />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default Cards;
