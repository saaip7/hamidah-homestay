"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Accordion Component
const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-b">{children}</div>
}

// Accordion Item
const AccordionItem = ({
  className,
  title,
  children,
}: {
  className?: string
  title: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={cn("border-b", className)}>
      <div
        onClick={toggleAccordion}
        className="flex items-center justify-between py-4 font-medium cursor-pointer transition-all hover:underline"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="text-sm transition-all">
          <div className="pb-4">{children}</div>
        </div>
      )}
    </div>
  )
}

export { Accordion, AccordionItem }
