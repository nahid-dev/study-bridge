import Container from "@/components/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
const companyInfoItems = [
  {
    type: "address",
    icon: MapPin,
    details: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
  },
  {
    type: "phone",
    icon: Phone,
    details: {
      mobile: "(+096) 468 235",
      fax: "(+096) 468 235",
    },
  },
  {
    type: "email",
    icon: Mail,
    details: "support@skola.com",
  },
];

const CompanyInfoSection = () => {
  return (
    <div>
      <Container>
        <div className="h-40 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-md bg-foreground px-10 py-3 absolute -bottom-20">
            {companyInfoItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className=" p-3 rounded-full">
                  <item.icon strokeWidth={1} className="size-12 text-white" />
                </div>
                <div className="text-white">
                  {item.type === "phone" ? (
                    <div>
                      <p className="text-lg">Mobile: {item.details.mobile}</p>
                      <p className="text-lg">Fax: {item.details.fax}</p>
                    </div>
                  ) : (
                    <p className="text-lg text-white text-center">
                      {item?.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyInfoSection;
