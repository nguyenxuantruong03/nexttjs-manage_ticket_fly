"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { AirportTransferFormSchema } from "../schema/core/schema";

export default function ServiceStep() {
  return (
    <>
      {/* Flight Support */}
      <FormSection
        title="Flight Support"
        description="Flight tracking and passenger flight information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.flightNumberRequired"
            label="Flight Number Required"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.airlineRequired"
            label="Airline Required"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.terminalSupported"
            label="Terminal Supported"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.arrivalFlightOnly"
            label="Arrival Flight Only"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.departureFlightOnly"
            label="Departure Flight Only"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.flightTracking"
            label="Flight Tracking"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="flightSupport.delayMonitoring"
            label="Delay Monitoring"
          />
        </div>
      </FormSection>

      {/* Meet And Greet */}
      <FormSection title="Meet And Greet" description="Airport welcome service">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormSchema>
            name="meetAndGreet.available"
            label="Available"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="meetAndGreet.included"
            label="Included"
          />

          <FormInput<AirportTransferFormSchema>
            name="meetAndGreet.additionalFee"
            label="Additional Fee"
            type="number"
            placeholder="Enter additional fee"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="meetAndGreet.nameBoard"
            label="Name Board"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="meetAndGreet.airportRepresentative"
            label="Airport Representative"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="meetAndGreet.multilingualSupport"
            label="Multilingual Support"
          />
        </div>
      </FormSection>

      {/* Waiting Policy */}
      <FormSection title="Waiting Policy" description="Driver waiting rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="waitingPolicy.freeWaitingMinutes"
            label="Free Waiting Minutes"
            type="number"
            placeholder="Enter free waiting minutes"
          />

          <FormInput<AirportTransferFormSchema>
            name="waitingPolicy.airportFreeWaitingMinutes"
            label="Airport Free Waiting Minutes"
            type="number"
            placeholder="Enter airport waiting minutes"
          />

          <FormInput<AirportTransferFormSchema>
            name="waitingPolicy.waitingFeePerHour"
            label="Waiting Fee Per Hour"
            type="number"
            placeholder="Enter waiting fee per hour"
          />

          <FormInput<AirportTransferFormSchema>
            name="waitingPolicy.maximumWaitingMinutes"
            label="Maximum Waiting Minutes"
            type="number"
            placeholder="Enter maximum waiting minutes"
          />
        </div>
      </FormSection>

      {/* Luggage Policy */}
      <FormSection title="Luggage Policy" description="Passenger luggage rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="luggagePolicy.checkedBaggage"
            label="Checked Baggage"
            type="number"
            placeholder="Enter checked baggage quantity"
          />

          <FormInput<AirportTransferFormSchema>
            name="luggagePolicy.cabinBaggage"
            label="Cabin Baggage"
            type="number"
            placeholder="Enter cabin baggage quantity"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="luggagePolicy.oversizedAllowed"
            label="Oversized Allowed"
          />

          <FormInput<AirportTransferFormSchema>
            name="luggagePolicy.oversizedFee"
            label="Oversized Fee"
            type="number"
            placeholder="Enter oversized fee"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="luggagePolicy.sportsEquipmentAllowed"
            label="Sports Equipment Allowed"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="luggagePolicy.strollerAllowed"
            label="Stroller Allowed"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="luggagePolicy.wheelchairAllowed"
            label="Wheelchair Allowed"
          />
        </div>
      </FormSection>

      {/* Passenger Requirement */}
      <FormSection
        title="Passenger Requirement"
        description="Passenger information requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormSchema>
            name="passengerRequirement.passportRequired"
            label="Passport Required"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="passengerRequirement.phoneRequired"
            label="Phone Required"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="passengerRequirement.emailRequired"
            label="Email Required"
          />

          <FormInput<AirportTransferFormSchema>
            name="passengerRequirement.minimumPassenger"
            label="Minimum Passenger"
            type="number"
            placeholder="Enter minimum passenger"
          />

          <FormInput<AirportTransferFormSchema>
            name="passengerRequirement.maximumPassenger"
            label="Maximum Passenger"
            type="number"
            placeholder="Enter maximum passenger"
          />
        </div>
      </FormSection>

      {/* Special Request */}
      <FormSection
        title="Special Request"
        description="Additional customer requirements"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.childSeat"
            label="Child Seat"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.babySeat"
            label="Baby Seat"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.boosterSeat"
            label="Booster Seat"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.wheelchair"
            label="Wheelchair"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.petTransport"
            label="Pet Transport"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.bicycle"
            label="Bicycle"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.skiEquipment"
            label="Ski Equipment"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.golfBag"
            label="Golf Bag"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.additionalStop"
            label="Additional Stop"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="specialRequest.noteSupported"
            label="Note Supported"
          />
        </div>
      </FormSection>

      {/* Contact Information */}
      <FormSection
        title="Contact Information"
        description="Support contact details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="contactInformation.hotline"
            label="Hotline"
            placeholder="Enter hotline number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.whatsapp"
            label="WhatsApp"
            placeholder="Enter WhatsApp number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.telegram"
            label="Telegram"
            placeholder="Enter Telegram username"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.emergencyPhone"
            label="Emergency Phone"
            placeholder="Enter emergency phone number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.supportEmail"
            label="Support Email"
            placeholder="Enter support email"
          />
        </div>
      </FormSection>
    </>
  );
}
