import {Stack, Box} from '@mui/material';
import SummaryCard from '../../organisms/SummaryCard';

const NavbarTemplate: React.FC = ()=> {
    return(
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Stack direction="row" spacing={3} >
                <SummaryCard />
            </Stack>
        </Box>
    )
}
export default NavbarTemplate;