// import {Stack, Divider} from '@mui/material';
// import React, { useState } from 'react';
// import Icon from '../../atoms/Icon';
// import Text from '../../atoms/Text';
// import {NAVBAR_ITEMS} from '../../../constants/navItems';

// const Slider: React.FC = ()=>{
//     const [activeIndex, setActiveIndex] = useState(1);
//     return(
//         <Stack direction="column" spacing={2} 
//             sx={{
//                 width: '271px', 
//                 paddingLeft: '40px',
//                 paddingTop: '40px',
//                 paddingBottom: '100px',
//                 paddingRight: '30px'
//             }} 
//         >
//             {
//              NAVBAR_ITEMS.map((item, index)=>(
//                 <>
//                     <Stack direction="row" key = {index} alignItems = "center" spacing={2}
//                         sx={{
//                             backgroundColor: activeIndex === index ? '#E0F7FA' : 'transparent', 
//                             borderRadius: '8px',
//                             cursor: 'pointer',
//                             '&:hover': {
//                             backgroundColor: '#E0F7FA', 
//                             },
//                     }}
//                     onClick={() => setActiveIndex(index)}
//                     >
//                         <Icon src= {item.icon} alt={item.alt} height = '40px'/>
//                         <Text variant="body1" text={item.text}/>
//                     </Stack>
//                     {index === 4 && <Divider sx={{ margin: '10px 20px',  }} />}
//                 </>
//              ))
//             }
            
//         </Stack>
//     )
// }

// export default Slider;

import React, { useState } from 'react';
import { StyledStack, ItemStack, StyledDivider } from './index.styles';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import { NAVBAR_ITEMS } from '../../../constants/navItems';

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  return (
    <StyledStack direction="column" spacing={2}>
      {NAVBAR_ITEMS.map((item, index) => (
        <React.Fragment key={index}>
          <ItemStack
            direction="row"
            alignItems="center"
            spacing={2}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)} 
          >
            <Icon src={item.icon} alt={item.alt} height="40px" />
            <Text variant="body1" text={item.text} />
          </ItemStack>

          {index === 4 && <StyledDivider />} 
        </React.Fragment>
      ))}
    </StyledStack>
  );
};

export default Slider;

// added this comment inorder to create a pullrequest by creating a new branch
