import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const MeetingsWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"bmw"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border/50">
      <Cal 
        namespace="bmw"
        calLink="pedro-mendes-bejge9/bmw"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
};

export default MeetingsWidget;