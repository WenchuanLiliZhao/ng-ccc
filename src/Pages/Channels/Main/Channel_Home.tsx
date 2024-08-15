import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import Section_NewsClipping from "../../../Components/Sections/NewsClipping";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import TitledSection from "../../../Components/Sections/TitledSection";
import SiteInfo from "../../../SiteInfo";
import Channel from "../../_Templates/Channel";
import Posts from "../../Posts/Posts";

const Channel_Home: Channel = {
  info: {
    title: "首頁",
    key: "",
    brief: `${SiteInfo.brief}`,
    title_display: <>{SiteInfo.logo.text}</>,
    label: `聯合電子出版`,
    front: (
      <Section_NewsClipping className="only-show-above-screen-size-1000" />
    ),
  },

  content: (
    <>
      {/* <Section_SlidingCards
        cards={[
          Posts.Post_WhereDidItComeFrom,
          Posts.Post_MoonFestival,
          Posts.Post_WhereDidItComeFrom,
          Posts.Post_WhereDidItComeFrom,
        ]}
      /> */}

      <TitledSection
        title={"最新動態"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        body={
          <>
            {/* <Gallery_MediumCards
              columnCount={3}
              posts={[
                Posts.Post_WhereDidItComeFrom,
                Posts.Post_MoonFestival,
                Posts.Post_WhereDidItComeFrom,
                // Posts.Post_WhereDidItComeFrom,
              ]}
            /> */}
          </>
        }
      />

      {/* <TitledSection
        title={"Latest Updates"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        body={
          <Gallery_BigCards posts={[
            Posts.Post_WhereDidItComeFrom,
              Posts.Post_MoonFestival,
              Posts.Post_WhereDidItComeFrom,
          ]} />
        }
      /> */}

      <Section_NewsClipping className="only-show-below-screen-size-1000" />

      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          laoreet, tortor eu bibendum tristique, neque ligula interdum dolor, eu
          fermentum metus ligula sed metus. Ut et nulla ornare, volutpat erat
          at, commodo neque. Sed rutrum lectus ac vestibulum tincidunt. Aliquam
          id erat fringilla, condimentum massa at, scelerisque ligula.
          Vestibulum eleifend, erat non varius bibendum, sapien ante accumsan
          neque, sodales luctus risus enim non risus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In vel ligula risus. In vel mi mauris. Mauris neque turpis,
          condimentum at ante eget, euismod rutrum nulla. Pellentesque dolor
          felis, consequat eu sodales non, finibus vitae risus. Suspendisse eu
          mollis felis. Pellentesque quis purus felis. Nunc sit amet elit at
          arcu rhoncus dignissim eget nec purus.
        </p>
        <p>
          Sed vel urna nec libero iaculis cursus vitae eu neque. Nam tristique,
          ante quis feugiat aliquet, arcu leo accumsan tortor, id scelerisque
          risus sem sed tortor. Donec quis cursus eros. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus a eros eget ligula dapibus semper vitae ut leo.
          Nunc sed turpis et metus accumsan tristique. Maecenas eu arcu feugiat,
          porttitor tortor sit amet, maximus velit. Morbi et ante vulputate
          turpis efficitur iaculis eu sit amet nisi. Mauris ante lacus, sodales
          eget ante sed, tincidunt cursus arcu. Integer fermentum diam est, ac
          fringilla velit euismod vel. Nam blandit tincidunt malesuada. Integer
          convallis mauris in augue feugiat rutrum. Mauris tincidunt ex in
          aliquam malesuada. Aenean molestie imperdiet orci, efficitur laoreet
          lorem viverra interdum. Maecenas eget libero et nisi lacinia rutrum
          eget id purus. Donec commodo, massa et bibendum cursus, metus enim
          ornare augue, ut interdum nulla eros et leo.
        </p>
        <p>
          In ipsum purus, interdum eu sollicitudin tincidunt, viverra ac sapien.
          Curabitur faucibus quam ut elit scelerisque mollis. Nullam tincidunt
          feugiat ante at dignissim. Sed eu mi auctor, dapibus lorem sit amet,
          sollicitudin erat. Donec ut sem ultrices nisi placerat dictum quis
          eget orci. Pellentesque sed neque faucibus, efficitur enim at,
          imperdiet sem. Sed justo ipsum, porta quis ipsum nec, fermentum
          tristique est. Donec pharetra ligula in purus ornare auctor.
        </p>
        <p>
          Vestibulum at aliquam turpis. Fusce sagittis nec nulla at convallis.
          Etiam pellentesque, ligula in fringilla gravida, magna risus sagittis
          libero, non fermentum quam massa id urna. Maecenas id nulla in nulla
          vestibulum convallis in ac libero. Morbi iaculis dui eget rhoncus
          consequat. Mauris aliquet nunc et libero porta, ac dapibus magna
          malesuada. Mauris tristique ipsum sit amet metus iaculis bibendum. Ut
          sed mollis nulla. Curabitur sed orci eget turpis egestas aliquet.
          Morbi at faucibus est. Phasellus ornare varius varius. Vestibulum
          mattis mollis diam vel lobortis. Nullam varius malesuada metus, non
          vestibulum quam fermentum vitae. Nullam maximus magna lacus, eu rutrum
          ex blandit egestas. Nullam sit amet mauris dictum, tristique enim sit
          amet, gravida lorem. Nulla ante neque, auctor sit amet leo vel,
          euismod eleifend velit.
        </p>
        <p>
          Sed magna sem, porttitor a iaculis in, mollis tempus justo. Nullam
          congue, nisl in tincidunt maximus, dui risus congue quam, sit amet
          scelerisque tellus neque vel mi. Donec a pellentesque mi. Mauris
          hendrerit interdum augue. Mauris vehicula nunc ut nisi laoreet
          gravida. Mauris lacinia tellus neque, in aliquam enim elementum sit
          amet. Nunc volutpat feugiat elit at congue. Morbi vitae vestibulum
          dui, sit amet tempor est. Mauris iaculis est a vulputate cursus.
          Suspendisse et lobortis nulla. Sed convallis fringilla neque. Mauris
          tortor erat, tempus at neque vitae, semper lacinia nisi. In eleifend
          lacus quis ipsum porta aliquet sed vitae purus. Sed pretium nisi
          nulla, venenatis malesuada sapien lobortis eu. In finibus faucibus
          elit, sit amet mollis augue maximus sed.
        </p>
      </div>

      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          laoreet, tortor eu bibendum tristique, neque ligula interdum dolor, eu
          fermentum metus ligula sed metus. Ut et nulla ornare, volutpat erat
          at, commodo neque. Sed rutrum lectus ac vestibulum tincidunt. Aliquam
          id erat fringilla, condimentum massa at, scelerisque ligula.
          Vestibulum eleifend, erat non varius bibendum, sapien ante accumsan
          neque, sodales luctus risus enim non risus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In vel ligula risus. In vel mi mauris. Mauris neque turpis,
          condimentum at ante eget, euismod rutrum nulla. Pellentesque dolor
          felis, consequat eu sodales non, finibus vitae risus. Suspendisse eu
          mollis felis. Pellentesque quis purus felis. Nunc sit amet elit at
          arcu rhoncus dignissim eget nec purus.
        </p>
        <p>
          Sed vel urna nec libero iaculis cursus vitae eu neque. Nam tristique,
          ante quis feugiat aliquet, arcu leo accumsan tortor, id scelerisque
          risus sem sed tortor. Donec quis cursus eros. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus a eros eget ligula dapibus semper vitae ut leo.
          Nunc sed turpis et metus accumsan tristique. Maecenas eu arcu feugiat,
          porttitor tortor sit amet, maximus velit. Morbi et ante vulputate
          turpis efficitur iaculis eu sit amet nisi. Mauris ante lacus, sodales
          eget ante sed, tincidunt cursus arcu. Integer fermentum diam est, ac
          fringilla velit euismod vel. Nam blandit tincidunt malesuada. Integer
          convallis mauris in augue feugiat rutrum. Mauris tincidunt ex in
          aliquam malesuada. Aenean molestie imperdiet orci, efficitur laoreet
          lorem viverra interdum. Maecenas eget libero et nisi lacinia rutrum
          eget id purus. Donec commodo, massa et bibendum cursus, metus enim
          ornare augue, ut interdum nulla eros et leo.
        </p>
        <p>
          In ipsum purus, interdum eu sollicitudin tincidunt, viverra ac sapien.
          Curabitur faucibus quam ut elit scelerisque mollis. Nullam tincidunt
          feugiat ante at dignissim. Sed eu mi auctor, dapibus lorem sit amet,
          sollicitudin erat. Donec ut sem ultrices nisi placerat dictum quis
          eget orci. Pellentesque sed neque faucibus, efficitur enim at,
          imperdiet sem. Sed justo ipsum, porta quis ipsum nec, fermentum
          tristique est. Donec pharetra ligula in purus ornare auctor.
        </p>
        <p>
          Vestibulum at aliquam turpis. Fusce sagittis nec nulla at convallis.
          Etiam pellentesque, ligula in fringilla gravida, magna risus sagittis
          libero, non fermentum quam massa id urna. Maecenas id nulla in nulla
          vestibulum convallis in ac libero. Morbi iaculis dui eget rhoncus
          consequat. Mauris aliquet nunc et libero porta, ac dapibus magna
          malesuada. Mauris tristique ipsum sit amet metus iaculis bibendum. Ut
          sed mollis nulla. Curabitur sed orci eget turpis egestas aliquet.
          Morbi at faucibus est. Phasellus ornare varius varius. Vestibulum
          mattis mollis diam vel lobortis. Nullam varius malesuada metus, non
          vestibulum quam fermentum vitae. Nullam maximus magna lacus, eu rutrum
          ex blandit egestas. Nullam sit amet mauris dictum, tristique enim sit
          amet, gravida lorem. Nulla ante neque, auctor sit amet leo vel,
          euismod eleifend velit.
        </p>
        <p>
          Sed magna sem, porttitor a iaculis in, mollis tempus justo. Nullam
          congue, nisl in tincidunt maximus, dui risus congue quam, sit amet
          scelerisque tellus neque vel mi. Donec a pellentesque mi. Mauris
          hendrerit interdum augue. Mauris vehicula nunc ut nisi laoreet
          gravida. Mauris lacinia tellus neque, in aliquam enim elementum sit
          amet. Nunc volutpat feugiat elit at congue. Morbi vitae vestibulum
          dui, sit amet tempor est. Mauris iaculis est a vulputate cursus.
          Suspendisse et lobortis nulla. Sed convallis fringilla neque. Mauris
          tortor erat, tempus at neque vitae, semper lacinia nisi. In eleifend
          lacus quis ipsum porta aliquet sed vitae purus. Sed pretium nisi
          nulla, venenatis malesuada sapien lobortis eu. In finibus faucibus
          elit, sit amet mollis augue maximus sed.
        </p>
      </div>

      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          laoreet, tortor eu bibendum tristique, neque ligula interdum dolor, eu
          fermentum metus ligula sed metus. Ut et nulla ornare, volutpat erat
          at, commodo neque. Sed rutrum lectus ac vestibulum tincidunt. Aliquam
          id erat fringilla, condimentum massa at, scelerisque ligula.
          Vestibulum eleifend, erat non varius bibendum, sapien ante accumsan
          neque, sodales luctus risus enim non risus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In vel ligula risus. In vel mi mauris. Mauris neque turpis,
          condimentum at ante eget, euismod rutrum nulla. Pellentesque dolor
          felis, consequat eu sodales non, finibus vitae risus. Suspendisse eu
          mollis felis. Pellentesque quis purus felis. Nunc sit amet elit at
          arcu rhoncus dignissim eget nec purus.
        </p>
        <p>
          Sed vel urna nec libero iaculis cursus vitae eu neque. Nam tristique,
          ante quis feugiat aliquet, arcu leo accumsan tortor, id scelerisque
          risus sem sed tortor. Donec quis cursus eros. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus a eros eget ligula dapibus semper vitae ut leo.
          Nunc sed turpis et metus accumsan tristique. Maecenas eu arcu feugiat,
          porttitor tortor sit amet, maximus velit. Morbi et ante vulputate
          turpis efficitur iaculis eu sit amet nisi. Mauris ante lacus, sodales
          eget ante sed, tincidunt cursus arcu. Integer fermentum diam est, ac
          fringilla velit euismod vel. Nam blandit tincidunt malesuada. Integer
          convallis mauris in augue feugiat rutrum. Mauris tincidunt ex in
          aliquam malesuada. Aenean molestie imperdiet orci, efficitur laoreet
          lorem viverra interdum. Maecenas eget libero et nisi lacinia rutrum
          eget id purus. Donec commodo, massa et bibendum cursus, metus enim
          ornare augue, ut interdum nulla eros et leo.
        </p>
        <p>
          In ipsum purus, interdum eu sollicitudin tincidunt, viverra ac sapien.
          Curabitur faucibus quam ut elit scelerisque mollis. Nullam tincidunt
          feugiat ante at dignissim. Sed eu mi auctor, dapibus lorem sit amet,
          sollicitudin erat. Donec ut sem ultrices nisi placerat dictum quis
          eget orci. Pellentesque sed neque faucibus, efficitur enim at,
          imperdiet sem. Sed justo ipsum, porta quis ipsum nec, fermentum
          tristique est. Donec pharetra ligula in purus ornare auctor.
        </p>
        <p>
          Vestibulum at aliquam turpis. Fusce sagittis nec nulla at convallis.
          Etiam pellentesque, ligula in fringilla gravida, magna risus sagittis
          libero, non fermentum quam massa id urna. Maecenas id nulla in nulla
          vestibulum convallis in ac libero. Morbi iaculis dui eget rhoncus
          consequat. Mauris aliquet nunc et libero porta, ac dapibus magna
          malesuada. Mauris tristique ipsum sit amet metus iaculis bibendum. Ut
          sed mollis nulla. Curabitur sed orci eget turpis egestas aliquet.
          Morbi at faucibus est. Phasellus ornare varius varius. Vestibulum
          mattis mollis diam vel lobortis. Nullam varius malesuada metus, non
          vestibulum quam fermentum vitae. Nullam maximus magna lacus, eu rutrum
          ex blandit egestas. Nullam sit amet mauris dictum, tristique enim sit
          amet, gravida lorem. Nulla ante neque, auctor sit amet leo vel,
          euismod eleifend velit.
        </p>
        <p>
          Sed magna sem, porttitor a iaculis in, mollis tempus justo. Nullam
          congue, nisl in tincidunt maximus, dui risus congue quam, sit amet
          scelerisque tellus neque vel mi. Donec a pellentesque mi. Mauris
          hendrerit interdum augue. Mauris vehicula nunc ut nisi laoreet
          gravida. Mauris lacinia tellus neque, in aliquam enim elementum sit
          amet. Nunc volutpat feugiat elit at congue. Morbi vitae vestibulum
          dui, sit amet tempor est. Mauris iaculis est a vulputate cursus.
          Suspendisse et lobortis nulla. Sed convallis fringilla neque. Mauris
          tortor erat, tempus at neque vitae, semper lacinia nisi. In eleifend
          lacus quis ipsum porta aliquet sed vitae purus. Sed pretium nisi
          nulla, venenatis malesuada sapien lobortis eu. In finibus faucibus
          elit, sit amet mollis augue maximus sed.
        </p>
      </div>
    </>
  ),
};

export default Channel_Home;
