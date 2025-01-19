import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { paths } from '@routes/paths.ts';
import { Link } from 'react-router';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------------------

type MealItemCardProps = {
    meal: Meal;
}

export default function MealItemCard({
    meal,
}: MealItemCardProps) {
    return (
        <Link to={paths.meals.single(meal.id)}>
            <Card sx={{
                position: 'relative',
                borderRadius: '1em',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
            }}>
                <CardMedia
                    component={'img'}
                    image={`/images/meals/${meal.image}`}
                    title={meal.name}
                    alt={meal.name}
                    onError={(e) => {
                        e.currentTarget.src = '/images/meals/no_meal.png';
                    }}
                    sx={{
                        height: { xs: 140, sm: 200, md: 250 },
                        objectFit: 'cover',
                        borderRadius: '0.75em',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: 4,
                        backgroundColor: 'common.white',
                        py: 0.5,
                        px: 2,
                        borderRadius: '100vw',
                    }}
                >
                    <Typography variant={'subtitle1'} fontWeight={'bold'}>
                        {meal.price}<Typography
                            variant={'subtitle1'}
                            component={'span'}
                            fontWeight={'inherit'}
                            color={'primary.main'}
                            ml={0.25}
                        >
                        €
                        </Typography>
                    </Typography>
                </Box>
                <CardContent>
                    <Typography
                        variant={'h5'}
                        sx={{
                            fontWeight: 'bold',
                            mb: meal.description ? 0.75 : 0,
                        }}
                    >{meal.name}</Typography>
                    <Typography variant={'body2'}>{meal.description}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
