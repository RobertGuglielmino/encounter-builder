import { Card, Skeleton, CardHeader, Divider, CardFooter } from "@chakra-ui/react";

function EncounterSkeleton() {

    return (
        <Card 
        size="lg">
            <CardHeader>
                <Skeleton height='40px'/>
            </CardHeader>
                <Skeleton height='200px'/>
                <Divider color="lightGray"/>
            <CardFooter>
                <Skeleton height='200px'/>
            </CardFooter>
        </Card>
    );
}

export default EncounterSkeleton;