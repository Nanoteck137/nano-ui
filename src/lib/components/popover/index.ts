import { Popover as PopoverPrimitive } from "bits-ui";
import Content from "./popover-content.svelte";

const Root = PopoverPrimitive.Root as typeof PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger as typeof PopoverPrimitive.Trigger;
const Close = PopoverPrimitive.Close as typeof PopoverPrimitive.Close;

export {
	Root,
	Content,
	Trigger,
	Close,
	//
	Root as Popover,
	Content as PopoverContent,
	Trigger as PopoverTrigger,
	Close as PopoverClose,
};
