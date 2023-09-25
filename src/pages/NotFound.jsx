import React, { useEffect } from "react";

export default function NotFound() {
  function scrollHandler(){
    // console.log(window.innerHeight)
    console.log(document.documentElement.scrollTop + window.innerHeight, "addition")
    console.log(document.documentElement.offsetHeight, "offsetheight")
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  },[]);
  return <div className="w-[60%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quae officia minima repellendus est, et illum eum iusto perspiciatis mollitia quod. Nisi reprehenderit fuga, eligendi laudantium debitis possimus repudiandae numquam, adipisci, veniam ratione sit. Aspernatur minima maiores porro tenetur aperiam. Nisi rerum eveniet soluta, quidem eum fuga nemo culpa amet tempore inventore exercitationem quas ratione, necessitatibus quos iure at distinctio! Nostrum soluta asperiores, ipsa cumque saepe debitis quis aliquid eligendi, et velit ex nam natus! Laborum eligendi unde voluptatem, deleniti rem, voluptatibus, in recusandae harum animi totam obcaecati itaque mollitia nemo possimus. Sapiente, molestiae quae dignissimos itaque ab necessitatibus eum dicta libero cumque, corporis deserunt! Commodi qui soluta ipsam iusto, explicabo nihil quia quam deleniti exercitationem optio, dolore delectus porro alias sunt eveniet mollitia recusandae odio dolor magnam asperiores? Omnis repellendus aut eaque velit qui culpa, sint molestiae itaque ipsam! Aliquid libero quam, tempore molestias voluptatibus neque eius quos nesciunt doloribus quia sequi accusamus. Facere quibusdam itaque error laudantium explicabo voluptas rerum, unde ea molestias, perferendis, modi laboriosam dolore ipsa quo recusandae repellendus eveniet impedit architecto at. Perspiciatis a aliquid nemo beatae cumque. Dignissimos nisi facere corrupti qui error reiciendis cumque dolorem incidunt praesentium nostrum dolor quaerat doloremque voluptas fugit libero sed doloribus velit consectetur sequi, dolorum perspiciatis dolore corporis vero maxime. Optio fugit omnis perferendis labore ipsum ex minima in placeat, qui cupiditate ipsam nulla cum, facere, provident dignissimos eaque doloribus aut dolorem. Corporis provident accusantium maxime fuga corrupti autem ipsum, culpa totam est unde doloremque repudiandae nam vitae exercitationem nihil dolorem, excepturi inventore, expedita quo harum. Officia rerum repellat ut magnam similique hic at voluptates natus tempora nam nobis porro facilis tempore, rem nisi odio error odit eius culpa aliquid cumque explicabo in, totam veniam. Sint soluta magni iure, quod labore error accusantium. Odio amet, labore quos molestiae soluta harum praesentium reprehenderit, odit enim fugiat facere voluptatem! Animi, dolor blanditiis eaque perspiciatis perferendis natus vero. Ex quas ipsam suscipit iste labore voluptatem impedit cumque molestias, repudiandae reprehenderit voluptatibus autem. Architecto error possimus maiores nisi eaque reiciendis velit ducimus perspiciatis autem unde repudiandae, similique atque id quis expedita beatae aliquid nemo sint commodi rerum accusamus? Accusamus, quia sequi sint corrupti temporibus hic tempora odit esse quo sed qui numquam explicabo placeat, molestias reiciendis cumque quisquam mollitia, eius at dolorem repellat cum! Eaque iste, debitis nesciunt molestias reiciendis ipsa natus blanditiis possimus similique quos dolore doloribus omnis quaerat aspernatur tempora voluptatem impedit doloremque sed commodi hic. Nemo ducimus similique debitis, praesentium distinctio voluptatum ex aperiam culpa labore tempora non, reprehenderit ut voluptas ipsam in minus soluta accusantium excepturi, expedita vel suscipit animi? Ex alias cum deleniti laudantium minus tempora saepe ipsa enim eos explicabo quam porro, perferendis repellendus ab, consectetur atque cupiditate nobis corporis deserunt magnam voluptate! Saepe fugit animi architecto ipsam cumque accusamus et recusandae harum soluta eaque incidunt beatae dignissimos, illum iure facilis corrupti iste ipsa eius illo nihil minus perferendis similique dolores. Nostrum soluta dolorem quaerat nulla adipisci atque eius consequatur modi fuga illo, enim, saepe tempore?</div>;
}