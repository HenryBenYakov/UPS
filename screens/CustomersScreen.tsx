import { ActivityIndicator, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Image } from "@rneui/themed";
import { Input } from "@rneui/themed";
import { CustomerList, CustomerResponse } from "../typings";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import { CustomerCard } from "../components/CustomerCard";

export const CustomersScreen = () => {
  const tw = useTailwind();
  const [input, setInput] = useState<string>("");
  const { data } = useQuery(GET_CUSTOMERS);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />

      {data?.getCustomers
        ?.filter((customer: CustomerList) =>
          customer.value.name.includes(input)
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};
