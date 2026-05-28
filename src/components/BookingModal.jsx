"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  ListBox,
  Select,
  TextField,
  DateField,
  TextArea,
  FieldError,
} from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const BookingModal = ({ car }) => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const [bookingDate, setBookingDate] = useState(null);

  const {
    _id,
    name,
    brand,
    type,
    fuelType,
    transmission,
    seats,
    pricePerDay,
    rating,
    available,
    image,
  } = car;

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      userID: user?.id,
      userImage: user?.image,
      userName: user?.name,
      carId: _id,
      name,
      brand,
      type,
      fuelType,
      transmission,
      seats,
      pricePerDay,
      rating,
      available,
      image,
      bookingDate: new Date(bookingDate),
    };

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();

      //   console.log(data);
      toast.success("Booking successfully done");
    } catch (error) {
      toast.error("Booking Failed");
    }
  };

  return (
    <Modal>
      <Toaster></Toaster>
      <Button
        radius="lg"
        className="w-full h-14 mt-8 bg-black text-white text-lg font-semibold hover:bg-[#15A1BF] transition-all duration-300"
      >
        Book Now
        <ArrowUpRight size={20} />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-2xl py-7 font-bold">
                Fill the booking details
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                  {/* Driver Field */}
                  <Select
                    name="driverNeeded"
                    isRequired
                    className="w-full"
                    placeholder="Select Car Type"
                  >
                    <Label>Driver Needed</Label>

                    <Select.Trigger className="rounded-2xl">
                      <Select.Value />

                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="YES" textValue="YES">
                          YES
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="NO" textValue="NO">
                          NO
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Date Field */}
                  <div className="">
                    <DateField
                      isRequired
                      className=""
                      name="date"
                      onChange={setBookingDate}
                    >
                      <Label className="mb-2 block text-sm font-medium">
                        Booking Date
                      </Label>

                      <DateField.Group
                        className="
                w-full
                rounded-xl
                border
                md:px-30
                py-2
              "
                      >
                        <DateField.Input className="w-full">
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>
                  </div>

                  <TextField name="description" isRequired>
                    <Label>Special Note</Label>

                    <TextArea
                      placeholder="Describe your luxury car..."
                      className="rounded-3xl"
                    />

                    <FieldError />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Book Now
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;
