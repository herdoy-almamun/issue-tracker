import { Card, Grid } from "@radix-ui/themes";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  return (
    <Grid columns="3" gap="4" mb="2">
      <Card className="!flex flex-col gap-1 !border !border-red-500 text-red-500">
        <span className="text-md md:text-xl">Open</span>
        <span className="text-2xl">{open}</span>
      </Card>
      <Card className="!flex flex-col gap-1 !border !border-purple-500 text-purple-500">
        <span className="text-md md:text-xl">In Progress</span>
        <span className="text-2xl">{inProgress}</span>
      </Card>
      <Card className="!flex flex-col gap-1 !border !border-green-500 text-green-500">
        <span className="text-md md:text-xl">Closed</span>
        <span className="text-2xl">{closed}</span>
      </Card>
    </Grid>
  );
};

export default IssueSummary;
export const dynamic = "force-dynamic";
