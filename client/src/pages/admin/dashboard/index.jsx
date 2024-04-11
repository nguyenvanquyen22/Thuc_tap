import { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import OrdersAreaChart from './OrdersAreaChart';
import SalesBarChart from './SalesBarChart';
import SalesReportChart from './SalesReportChart';
import MainCard from '../../../components/MainCard';
import AnalyticalSummary from './AnalyticalSummary';
import BestSellingProductTable from './BestSellingProductTable';
import {
  moneyFormatter,
  numberWithCommas,
} from '../../../utils/moneyFormatter';

const status = [
  {
    value: 'week',
    label: 'Theo tuần',
  },
  {
    value: 'month',
    label: 'Theo tháng',
  },
];

const DashboardPage = () => {
  const [value, setValue] = useState('month');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography fontWeight={600} variant='h5'>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số lượt truy cập'
          count={numberWithCommas(442236)}
          percentage={59.3}
          extra={numberWithCommas(35000)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số khách hàng'
          count={numberWithCommas(78250)}
          percentage={70.5}
          extra={numberWithCommas(8900)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng số đơn hàng'
          count={numberWithCommas(18800)}
          percentage={27.4}
          isLoss
          color='warning'
          extra={numberWithCommas(1943)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticalSummary
          title='Tổng doanh thu'
          count={moneyFormatter(199991213)}
          percentage={27.4}
          isLoss
          color='warning'
          extra={moneyFormatter(12312313)}
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
      />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Đơn hàng</Typography>
          </Grid>
          <Grid item>
            <Stack direction='row' alignItems='center' spacing={0}>
              <Button
                size='small'
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Tháng
              </Button>
              <Button
                size='small'
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Tuần
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <OrdersAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Tổng quan thu nhập</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography fontWeight={500} variant='h6' color='textSecondary'>
                Phân tích trong tuần này
              </Typography>
              <Typography fontWeight={500} variant='h3'>
                {moneyFormatter(129821000)}
              </Typography>
            </Stack>
          </Box>
          <SalesBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Báo cáo bán hàng</Typography>
          </Grid>
          <Grid item>
            <TextField
              id='standard-select-currency'
              size='small'
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{
                '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' },
              }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <SalesReportChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Sản phẩm bán chạy</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <BestSellingProductTable />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={12}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5'>Đơn hàng gần đây</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <RecentOrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
