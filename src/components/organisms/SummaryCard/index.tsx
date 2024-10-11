import {Card, Stack} from '@mui/material';
import Slider from '../../molecule/Slider';

const SummaryCard: React.FC = ()=>{
    return(
        <Card>
            <Stack direction="column" spacing={4}>
                <Slider/>
            </Stack>
        </Card>
    )
}

export default SummaryCard;