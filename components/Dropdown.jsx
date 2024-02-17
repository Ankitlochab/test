import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Doticon } from "./icon";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
    { name: "Home" },
    { name: "one" },
    { name: "two" },
    { name: "three" },
];

function Dropdown() {
    const [selected, setSelected] = useState(people[0]);
    const [op, setOp] = useState(0);

    return (
        <>
            <div
                onClick={() => setOp(!op)}
                className="onClick={() => setOp(!op)}     outline-none pl-[30px]   rounded-[5px]   w-[108px]  h-[54px]  "
            >
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative ">
                        <Listbox.Button className="  border-[rgba(0,0,0,0.26)]   relative  cursor-default    text-left focus:outline-none  sm:text-sm max-w-[348px] w-full ">
                            <span className="block truncate  text-white font-normal text-[16px]">{selected.name}</span>
                            <span
                                className={`pointer-events-none pt-[-20px] absolute inset-y-0 right-0 flex items-center  ${op ? "-rotate-180" : ""
                                    }`}
                            >
                                <Doticon />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute  mt-1  w-[150px] overflow-auto    rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm ">
                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#263AC3] text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>

                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        </>
    );
}

export default Dropdown;