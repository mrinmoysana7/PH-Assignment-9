"use client";

import sideImage from "@/assets/porsche.jpg";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
  Checkbox,
} from "@heroui/react";
import { redirect } from "next/navigation";

const AddCarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rentalCar = Object.fromEntries(formData.entries());
    console.log(rentalCar);

    const res = await fetch("http://localhost:5000/added-cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rentalCar),
    });
    const data = await res.json();
    redirect("/add-car");
    console.log(data);
  };
  return (
    <div className=" bg-[#F7F5F2] px-5 py-5 md:py-20">
      <section className="container mx-auto ">
        <div className="">
          {/* TOP SECTION */}
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-[#B88E5A] font-semibold mb-4">
              Luxury Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-[#111111]">
              Add Luxury Car
            </h1>

            <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
              Publish your premium vehicle and connect with luxury rental
              customers.
            </p>
          </div>

          {/* FORM CONTAINER */}
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* LEFT SIDE */}

              <div
                className={` lg:col-span-2
                 relative
                 overflow-hidden
                 p-10
                 text-white
                 flex
                 flex-col
                 justify-between
                 min-h-175
                 bg-cover
                 bg-center`}
                style={{
                  backgroundImage: `url("${sideImage.src}")`,
                }}
              >
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* CONTENT */}
                <div className="relative z-10">
                  <p className="uppercase tracking-[0.3em] text-[#B88E5A] text-sm font-semibold">
                    CarFleet
                  </p>

                  <h2 className="text-4xl font-black leading-tight mt-6">
                    Premium Car
                    <br />
                    Rental Platform
                  </h2>

                  <p className="text-gray-300 mt-6 leading-relaxed">
                    Add your luxury car and manage bookings professionally with
                    modern UI experience.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-[#111111]">
                    Car Information
                  </h2>

                  <p className="text-gray-500 mt-3">
                    Fill all details carefully before publishing.
                  </p>
                </div>

                <Form onSubmit={onSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {/* CAR NAME */}
                    <div className="md:col-span-2">
                      <TextField name="carName" isRequired>
                        <Label>Car Name</Label>
                        <Input
                          placeholder="Mercedes-Benz S-Class"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* DAILY PRICE */}
                    <TextField name="dailyRentPrice" type="number" isRequired>
                      <Label>Daily Rent Price</Label>
                      <Input
                        type="number"
                        placeholder="250"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* CAR TYPE */}
                    <div>
                      <Select
                        name="carType"
                        isRequired
                        className="w-full"
                        placeholder="Select Car Type"
                      >
                        <Label>Car Type</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />

                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="SUV" textValue="SUV">
                              SUV
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Luxury SUV"
                              textValue="Luxury SUV"
                            >
                              Luxury SUV
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Sedan" textValue="Sedan">
                              Sedan
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Electric Sedan"
                              textValue="Electric Sedan"
                            >
                              Electric Sedan
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Luxury Sedan"
                              textValue="Luxury Sedan"
                            >
                              Luxury Sedan
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Sports Coupe"
                              textValue="Sports Coupe"
                            >
                              Sports Coupe
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              id="Sports Car"
                              textValue="Sports Car"
                            >
                              Sports Car
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Supercar" textValue="Supercar">
                              Supercar
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* IMAGE URL */}
                    <div className="md:col-span-2">
                      <TextField name="image" isRequired>
                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/car.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* SEAT CAPACITY */}
                    <TextField name="seatCapacity" type="number" isRequired>
                      <Label>Seat Capacity</Label>

                      <Input
                        type="number"
                        placeholder="4"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* PICKUP LOCATION */}
                    <TextField name="pickupLocation" isRequired>
                      <Label>Pickup Location</Label>

                      <Input
                        placeholder="New York, USA"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* DESCRIPTION */}
                    <div className="md:col-span-2">
                      <TextField name="description" isRequired>
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Describe your luxury car..."
                          className="rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* AVAILABILITY */}
                  <div className="w-full bg-[#F7F5F2] border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">Availability Status</h4>

                      <p className="text-sm text-gray-500 mt-1">
                        Mark this car available for booking.
                      </p>
                    </div>

                    <Checkbox defaultSelected name="available" color="warning">
                      Available
                    </Checkbox>
                  </div>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    className="rounded-full w-full bg-[#111111] hover:bg-[#B88E5A] text-white h-14 text-lg font-semibold transition-all"
                  >
                    Publish Car
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddCarPage;
