"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";

const UpdateCarModal = ({ car }) => {
  const {
    carName,
    _id,
    dailyRentPrice,
    carType,
    image,
    seatCapacity,
    pickupLocation,
    available,
    description,
  } = car;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cars = Object.fromEntries(formData.entries());
    console.log(cars);

    const res = await fetch(`http://localhost:5000/added-cars/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cars),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Modal>
        <Button
          radius="full"
          className="flex-1 px-7 md:w-50 h-14 bg-[#111111] text-white font-semibold hover:bg-[#B88E5A] transition-all"
        >
          <Pencil size={18} />
          Edit Car
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header className="text-center">
                <Modal.Heading className="text-2xl md:text-4xl font-black text-[#111111]">
                  Update Car Details
                </Modal.Heading>
                <p className="text-gray-500 md:mt-4 leading-relaxed">
                  Update your luxury vehicle information below.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* PRICE */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="carName"
                      defaultValue={carName}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Car Name
                      </Label>
                      <Input
                        placeholder={carName}
                        className="rounded-2xl bg-white border border-gray-200"
                      />
                    </TextField>
                    {/* PRICE */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="dailyRentPrice"
                      defaultValue={dailyRentPrice}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Daily Rent Price
                      </Label>
                      <Input
                        placeholder="$250"
                        className="rounded-2xl bg-white border border-gray-200"
                      />
                    </TextField>

                    {/* TYPE */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="carType"
                      defaultValue={carType}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Car Type
                      </Label>

                      <Input
                        placeholder={carType}
                        className="rounded-2xl bg-white border border-gray-200"
                      />
                    </TextField>

                    {/* IMAGE */}
                    <TextField
                      className="w-full"
                      name="image"
                      defaultValue={image}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Image URL
                      </Label>

                      <Input className="rounded-2xl bg-white border border-gray-200" />
                    </TextField>

                    {/* LOCATION */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="pickupLocation"
                      defaultValue={pickupLocation}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Pickup Location
                      </Label>

                      <Input
                        placeholder={pickupLocation}
                        className="rounded-2xl bg-white border border-gray-200"
                      />
                    </TextField>

                    {/* AVAILABILITY */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="availability"
                      defaultValue={available ? "Available" : "Unavailable"}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Availability
                      </Label>

                      <Input
                        placeholder={available}
                        className="rounded-2xl bg-white border border-gray-200"
                      />
                    </TextField>

                    {/* DESCRIPTION */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="description"
                      defaultValue={description}
                    >
                      <Label className="text-[#111111] font-semibold">
                        Description
                      </Label>

                      <textarea
                        rows={5}
                        name="description"
                        placeholder={description}
                        className="
                    w-full
                    mt-2
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    outline-none
                    resize-none
                    focus:ring-2
                    focus:ring-[#B88E5A]
                  "
                      />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close">Cancel</Button>
                      <Button type="submit" slot="close">
                        Update Car
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateCarModal;
