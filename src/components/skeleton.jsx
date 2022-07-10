import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const Flex = styled.div`
   display: flex;
   flex-wrap: wrap;

   * {
      margin: 4px;
   }
`;

export function SkeletonGallery() {
   return (
      <Flex>
         <Skeleton count={1} height={280} width={370} />
         <Skeleton count={1} height={280} width={370} />
         <Skeleton count={1} height={280} width={370} />
         <Skeleton count={1} height={280} width={370} />
         <Skeleton count={1} height={280} width={370} />
         <Skeleton count={1} height={280} width={370} />
      </Flex>
   );
}
