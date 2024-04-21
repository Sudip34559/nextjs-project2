"use client";
import React from "react";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <div className="relative z-40">{children}</div>
    </div>
  );
};
