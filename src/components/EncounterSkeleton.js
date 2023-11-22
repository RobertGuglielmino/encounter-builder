import { Card, Skeleton, CardHeader, Divider } from "@chakra-ui/react";

function EncounterSkeleton() {

    return (
        <Card size="lg" w="100%">
            <CardHeader>
                <Skeleton height='3em'/>
            </CardHeader>
            <Skeleton height='8em'/>
            <Skeleton height='2em' margin="30px"/>
            <Divider color="lightGray"/>
            <Skeleton height='200px' margin="30px"/>
        </Card>
    );
}

export default EncounterSkeleton;