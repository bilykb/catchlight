import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Rating} from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MediaDetails() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>Lord of the Rings</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Rating</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Watch on:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}